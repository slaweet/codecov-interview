# Generated by Django 2.1.1 on 2019-12-06 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20190619_1724'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('commit_hash', models.CharField(max_length=100)),
                ('message', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('git_provider', models.CharField(max_length=100)),
                ('repo_name', models.CharField(max_length=100)),
                ('repo_link', models.CharField(max_length=100)),
            ],
        ),
    ]