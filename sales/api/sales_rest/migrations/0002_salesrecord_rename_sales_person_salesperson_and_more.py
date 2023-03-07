# Generated by Django 4.0.3 on 2023-03-07 16:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SalesRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.CharField(max_length=10)),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_record', to='sales_rest.automobilevo')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_records', to='sales_rest.customer')),
            ],
        ),
        migrations.RenameModel(
            old_name='sales_person',
            new_name='SalesPerson',
        ),
        migrations.DeleteModel(
            name='sales_record',
        ),
        migrations.AddField(
            model_name='salesrecord',
            name='sales_person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_records', to='sales_rest.salesperson'),
        ),
    ]
