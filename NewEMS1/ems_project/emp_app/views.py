from django.shortcuts import render, redirect, HttpResponse
from .models import Employee
from .forms import EmployeeForm
from django.db.models import Q
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='log_url')
def EmpView(request):
    form = EmployeeForm()
    template_name = 'emp_app/home.html'
    if request.method == 'POST':
        form = EmployeeForm(request.POST, request.FILES or None)
        if form.is_valid():
            form.save()
            return redirect('show_url')
    context = {'form': form}
    return render(request, template_name, context)

@login_required(login_url='log_url')
def showView(request):
    data = Employee.objects.raw('SELECT * FROM emp_app_Employee')
    template_name = 'emp_app/show.html'
    context = {'data': data}
    return render(request, template_name, context)

def updateView(request, pk):
    obj = Employee.objects.get(id = pk)
    form = EmployeeForm(instance=obj)
    template_name = 'emp_app/home.html'
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=obj)
        if form.is_valid():
            form.save()
            return redirect('show_url')
    context = {'form': form}
    return render(request, template_name, context)

def deleteView(request, pk):
    obj = Employee.objects.get(id = pk)
    if request.method == 'POST':
        obj.delete()
        return redirect('show_url')
    template_name = 'emp_app/confirm.html'
    context ={'data': obj}
    return render(request, template_name, context)

def FilterView(request):
    if request.method == 'POST':
        name = request.POST['name']
        phone = request.POST['phone']
        role = request.POST['role']
        data = Employee.objects.all()
        if name:
            data = data.filter(Q(first_name = name) | Q(last_name = name))
        if phone:
            data = data.filter(Q(phone = phone))
        if role:
            data = data.filter(Q(role = role))
        context = {'data' : data}
        return render(request, 'emp_app/show.html', context)
    
    elif request.method == 'GET':
        return render(request, 'emp_app/filter.html')
    else:
        return HttpResponse('An Exception Occurred')
        