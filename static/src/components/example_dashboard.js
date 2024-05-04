/** @odoo-module */

import { registry } from "@web/core/registry"
import { KpiCard } from '@jekdoo/components/kpi_card/kpi_card';
import { ChartRenderer } from '@jekdoo/components/chart_renderer/chart_renderer';
import { JekAccordion } from '@jekdoo/components/accordion/accordion';
import { loadJS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted } = owl

export class JekdooDashboard extends Component {
    setup(){

    }
}

JekdooDashboard.template = 'jekdoo.DashboardTemplate';
JekdooDashboard.components = { KpiCard, ChartRenderer, JekAccordion, };

registry.category("actions").add("jekdoo.dashboard", JekdooDashboard)