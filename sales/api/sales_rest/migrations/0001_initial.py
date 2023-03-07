# Generated by Django 4.0.3 on 2023-03-06 22:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=100)),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=200)),
                ('phone_number', models.CharField(max_length=13)),
            ],
        ),
        migrations.CreateModel(
            name='sales_person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('employee_id', models.SmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='sales_record',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.CharField(max_length=10)),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_record', to='sales_rest.automobilevo')),
                ('sales_person', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_records', to='sales_rest.sales_person')),
            ],
        ),
    ]
