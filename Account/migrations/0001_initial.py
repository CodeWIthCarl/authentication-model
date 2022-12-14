# Generated by Django 4.0.6 on 2022-08-26 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_Name', models.CharField(max_length=20)),
                ('customer_number', models.IntegerField()),
                ('customer_address', models.TextField(max_length=50)),
                ('hide_button', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
    ]
