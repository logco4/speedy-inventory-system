# Generated by Django 4.0.3 on 2023-03-07 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_rename_owner_appointment_customer_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='automobile',
        ),
        migrations.AddField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=17, null=True),
        ),
    ]