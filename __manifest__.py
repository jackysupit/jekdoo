# -*- coding: utf-8 -*-
{
    'name': 'Jekdoo 16',
    'summary': 'make a better odoo',
    'version': '16.001',
    'category': 'Hidden',
    'author': 'jeki',
    'maintainer': 'jeki',
    'website':  '',
    'license': 'AGPL-3',
    'depends': [
        'base', 
    ],
    'data': [
        'security/ir.model.access.csv',

        'views/view_form.xml',
        'views/popup.xml',
    ],
    'application': False,
    'installable': True,
    'assets': {
        'web.assets_backend': [
            '/jekdoo/static/src/components/**/*.xml',
            '/jekdoo/static/src/components/**/*.scss',
            '/jekdoo/static/src/components/**/*.js',
        ],
    },
}