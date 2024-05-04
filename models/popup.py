# -*- coding: utf-8 -*-
from odoo import models, fields, api, _

class Popup(models.TransientModel):
    _name = 'jekdoo.popup'
    _description = 'to show popup only'

    name = fields.Text('Message', readonly=True)

    def msg(self, message='Success', title='Odoo'):
        return {
            'name': title,
            'type': 'ir.actions.act_window',
            'view_type': 'form',
            'view_mode': 'form',
            'res_model': 'jekdoo.popup',
            'target': 'new',
            'context': {'default_name': message}
        }
