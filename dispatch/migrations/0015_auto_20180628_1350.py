# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-06-28 20:50
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dispatch', '0014_subscription'),
    ]

    operations = [
        migrations.RenameField(
            model_name='subscription',
            old_name='keys',
            new_name='p256dh',
        ),
    ]