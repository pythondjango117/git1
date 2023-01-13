from rest_framework import serializers
from .models import Employee
from django.contrib.auth.models import User

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class SignUpSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    password=serializers.CharField(write_only=True)

    class Meta:
        model=User
        fields=('id','username','password','first_name','last_name','email')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)