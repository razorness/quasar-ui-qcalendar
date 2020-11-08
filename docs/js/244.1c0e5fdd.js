(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[244],{"122a":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="month"\n      locale="en-us"\n      mini-mode\n      no-active-date\n      animated\n      transition-prev="flip-left"\n      transition-next="flip-right"\n      :selected-dates="selectedDates"\n      @click:day2="onToggleDate"\n      @click:date2="onToggleDate"\n      style="max-width: 300px; min-width: auto; overflow: hidden"\n    />\n  </div>\n</template>\n\n<script>\nfunction leftClick (e) {\n  return e.button === 0\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      selectedDates: []\n    }\n  },\n\n  methods: {\n    onToggleDate ({ scope, event }) {\n      if (leftClick(event)) {\n        if (this.selectedDates.includes(scope.timestamp.date)) {\n          // remove the date\n          for (let i = 0; i < this.selectedDates.length; ++i) {\n            if (scope.timestamp.date === this.selectedDates[i]) {\n              this.selectedDates.splice(i, 1)\n              break\n            }\n          }\n        }\n        else {\n          // add the date\n          this.selectedDates.push(scope.timestamp.date)\n        }\n      }\n    }\n  }\n}\n<\/script>\n'}}]);