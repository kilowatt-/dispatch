# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-06-28 21:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dispatch', '0016_remove_subscription_expirationtime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='endpoint',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]