# Generated by Django 4.1.5 on 2023-01-12 18:01

from django.db import migrations, models
import emp_app.validators
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('dept', models.CharField(choices=[('Python Development', 'Python Development'), ('Java Development', 'Java Development'), ('DonNet Development', 'DonNet Development'), ('MERN Developer', 'MERN Developer'), ('Php Developement', 'Php Development'), ('ML Engineer', 'ML Engineer'), ('AI Engineer', 'AI Engineer'), ('AWS', 'AWS')], max_length=100)),
                ('role', models.CharField(choices=[('Python Developer', 'Python Developer'), ('Java Developer', 'Java Developer'), ('DonNet Developer', 'DonNet Developer'), ('MERN Developer', 'MERN Developer'), ('Php Developer', 'Php Developer'), ('Data Sciencetist', 'Data Sciencetist'), ('AI Engineer', 'AI Engineer'), ('Cloud Engineer', 'Cloud Engineer')], max_length=100)),
                ('salary', models.IntegerField(default=0)),
                ('bonus', models.IntegerField(default=0)),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('pdf', models.FileField(default=0, upload_to='media/', validators=[emp_app.validators.validate_file_extension])),
                ('Date_of_joining', models.DateField()),
            ],
        ),
    ]
