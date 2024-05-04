/** @odoo-module */

import { registry } from "@web/core/registry"
import { loadJS, loadCSS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted } = owl

export class JekAccordion extends Component {
    setup(){
        this.accordion = useRef('accordion');
        this.cardHeader = useRef('cardHeader');
        this.cardCollapse = useRef('cardCollapse');

        onWillStart(async () => {
            //
            loadCSS('/jekdoo/static/src/lib/fontawesome5/css/fontawesome.min.css');
		});

        onMounted(() => {
			this.accordion.el.addEventListener('click', (e) => {
				console.log('accordion is clicked');
                this.elOnClick(e);
			});
		})
    }

    elOnClick(e){
        let header = false;
        if (e.target.matches('.card-header')) header = e.target;
        if (e.target.parentNode.matches('.card-header')) header = e.target.parentNode;
        if (e.target.parentNode.parentNode.matches('.card-header')) header = e.target.parentNode.parentNode;

        if (!header) return;
    
        let elAccordion = this.accordion.el;
        let cardParent = header.parentNode;
        let collapseToShow = cardParent.querySelector('.collapse');
        let iconArrow = header.querySelector('.icon-arrow');


        if (collapseToShow.classList.contains('show')) {
            collapseToShow.classList.remove('show');
            header.classList.remove('card-header-show');
            iconArrow.classList.remove('fa-angle-down');
            iconArrow.classList.add('fa-angle-up');
        } else {
            var allCardHeaders = elAccordion.querySelectorAll('.card-header');
            if (allCardHeaders.length == 0) return;

            allCardHeaders.forEach(function (h) {
                h.classList.remove('card-header-show');

                let iArrow = h.querySelector('.icon-arrow');
                iArrow.classList.remove('fa-angle-down');
                iArrow.classList.add('fa-angle-up');
            });

            var allCollapses = elAccordion.querySelectorAll('.collapse.show');
            allCollapses.forEach(function (collapse) {
                collapse.classList.remove('show');
            });

            collapseToShow.classList.add('show');
            header.classList.add('card-header-show');
            iconArrow.classList.remove('fa-angle-up');
            iconArrow.classList.add('fa-angle-down');
        }                
    }
    
}

JekAccordion.template = 'jekdoo.JekAccordion';