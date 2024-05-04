# -*- coding: utf-8 -*-
from odoo import models, fields, api, _

class ir_ui_view(models.Model):
    _inherit = 'ir.ui.view'

    def action_reset_hard(self):
        self.reset_arch('hard')
        return True