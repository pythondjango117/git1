from django import forms
from.models import Employee

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = '__all__'
        widgets = {
            'Date_of_joining': forms.DateInput(attrs={'type':'date'})
        }