# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-10-19 08:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20171019_0805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='company',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]