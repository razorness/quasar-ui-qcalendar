(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[253],{bda4:function(a,e,n){"use strict";n.r(e),e["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%; overflow: hidden;\">\n    <div class=\"q-pa-md\">\n      <q-select\n        outlined\n        dense\n        emit-value\n        map-options\n        label=\"Change theme\"\n        v-model=\"theme\"\n        :options=\"themesList\"\n        class=\"col-12\"\n      ></q-select>\n    </div>\n    <q-separator></q-separator>\n    <q-calendar\n      v-model=\"selectedDate\"\n      view=\"month\"\n      locale=\"en-us\"\n      :style=\"theme\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      theme: {\n      },\n      themes: {\n        default: {\n        },\n        teal: {\n          '--calendar-border': '#4db6ac 1px solid',\n          '--calendar-border-dark': '#e0f2f1 1px solid',\n          '--calendar-border-section': '#80cbc4 1px dashed',\n          '--calendar-border-section-dark': '#80cbc4 1px dashed',\n          '--calendar-border-current': '#4db6ac 2px solid',\n          '--calendar-border-current-dark': '#1de9b6 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#004d40',\n          '--calendar-color-dark': '#e0f2f1',\n          '--calendar-background': '#e0f2f1',\n          '--calendar-background-dark': '#004d40',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#ffff66',\n          '--calendar-current-background': '#ffffff',\n          '--calendar-current-background-dark': '#004d40',\n          '--calendar-disabled-date-color': '#e0f2f1',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#80cbc4',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#000000',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#1de9b6',\n          '--calendar-active-date-background-dark': '#4db6ac',\n          '--calendar-outside-color': '#e0f2f1',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#80cbc4',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        brown: {\n          '--calendar-border': '#a1887f 1px solid',\n          '--calendar-border-dark': '#efebe9 1px solid',\n          '--calendar-border-section': '#bcaaa4 1px dashed',\n          '--calendar-border-section-dark': '#bcaaa4 1px dashed',\n          '--calendar-border-current': '#a1887f 2px solid',\n          '--calendar-border-current-dark': '#8d6e63 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#3e2723',\n          '--calendar-color-dark': '#efebe9',\n          '--calendar-background': '#efebe9',\n          '--calendar-background-dark': '#3e2723',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#efebe9',\n          '--calendar-current-background': '#ffffff',\n          '--calendar-current-background-dark': '#3e2723',\n          '--calendar-disabled-date-color': '#efebe9',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#bcaaa4',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#efebe9',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#8d6e63',\n          '--calendar-active-date-background-dark': '#a1887f',\n          '--calendar-outside-color': '#efebe9',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#bcaaa4',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        'deep purple': {\n          '--calendar-border': '#9575cd 1px solid',\n          '--calendar-border-dark': '#ede7f6 1px solid',\n          '--calendar-border-section': '#b39ddb 1px dashed',\n          '--calendar-border-section-dark': '#b39ddb 1px dashed',\n          '--calendar-border-current': '#9575cd 2px solid',\n          '--calendar-border-current-dark': '#651fff 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#311b92',\n          '--calendar-color-dark': '#ede7f6',\n          '--calendar-background': '#ede7f6',\n          '--calendar-background-dark': '#311b92',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#651fff',\n          '--calendar-current-background': '#ede7f6',\n          '--calendar-current-background-dark': '#311b92',\n          '--calendar-disabled-date-color': '#ede7f6',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#b39ddb',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#ede7f6',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#651fff',\n          '--calendar-active-date-background-dark': '#9575cd',\n          '--calendar-outside-color': '#ede7f6',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#b39ddb',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        indigo: {\n          '--calendar-border': '#7986cb 1px solid',\n          '--calendar-border-dark': '#e8eaf6 1px solid',\n          '--calendar-border-section': '#9fa8da 1px dashed',\n          '--calendar-border-section-dark': '#9fa8da 1px dashed',\n          '--calendar-border-current': '#7986cb 2px solid',\n          '--calendar-border-current-dark': '#3d5afe 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#1a237e',\n          '--calendar-color-dark': '#e8eaf6',\n          '--calendar-background': '#e8eaf6',\n          '--calendar-background-dark': '#1a237e',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#3d5afe',\n          '--calendar-current-background': '#e8eaf6',\n          '--calendar-current-background-dark': '#1a237e',\n          '--calendar-disabled-date-color': '#e8eaf6',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#9fa8da',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#e8eaf6',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#3d5afe',\n          '--calendar-active-date-background-dark': '#7986cb',\n          '--calendar-outside-color': '#e8eaf6',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#9fa8da',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        blue: {\n          '--calendar-border': '#64b5f6 1px solid',\n          '--calendar-border-dark': '#e3f2fd 1px solid',\n          '--calendar-border-section': '#90caf9 1px dashed',\n          '--calendar-border-section-dark': '#90caf9 1px dashed',\n          '--calendar-border-current': '#64b5f6 2px solid',\n          '--calendar-border-current-dark': '#2979ff 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#0d47a0',\n          '--calendar-color-dark': '#e3f2fd',\n          '--calendar-background': '#e3f2fd',\n          '--calendar-background-dark': '#0d47a0',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#2979ff',\n          '--calendar-current-background': '#e3f2fd',\n          '--calendar-current-background-dark': '#0d47a0',\n          '--calendar-disabled-date-color': '#e3f2fd',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#90caf9',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#e3f2fd',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#2979ff',\n          '--calendar-active-date-background-dark': '#64b5f6',\n          '--calendar-outside-color': '#e3f2fd',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#90caf9',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        }\n      }\n    }\n  },\n  computed: {\n    themesList () {\n      const list = []\n      Object.keys(this.themes).forEach((theme) => {\n        list.push({\n          label: theme,\n          value: { ...this.themes[theme] }\n        })\n      })\n      return list\n    }\n  }\n}\n<\/script>\n"}}]);