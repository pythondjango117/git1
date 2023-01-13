from django.urls import path
from.import views

urlpatterns = [
    path('ev/', views.EmpView, name='add_url'),
    path('sv/', views.showView, name='show_url'),
    path('uv/<int:pk>/', views.updateView, name='update_url'),
    path('dv/<int:pk>/', views.deleteView, name='delete_url'),
    path('filter/', views.FilterView, name='filter_url')
]