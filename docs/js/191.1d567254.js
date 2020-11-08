(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[191],{b400:function(n,a,t){"use strict";t.r(a),a["default"]="<template>\n  <div class=\"row items-center\" style=\"max-width: 800px; width: 100%; height: 421px;\">\n    <div class=\"col-8 full-height\">\n      <div class=\"row justify-center items-center\" style=\"height: 30px;\">\n        <q-btn flat dense label=\"Prev\" @click=\"calendarPrev\" />\n        <q-separator vertical />\n        <q-btn flat dense label=\"Next\" @click=\"calendarNext\" />\n      </div>\n      <q-separator />\n      <div style=\"overflow: hidden; height: 390px;\">\n        <q-calendar\n          ref=\"calendar\"\n          v-model=\"selectedDate\"\n          view=\"week-agenda\"\n          :weekdays=\"[1,2,3,4,5]\"\n          locale=\"en-us\"\n          animated\n          :left-column-options=\"leftColumnOptions\"\n          :right-column-options=\"rightColumnOptions\"\n          @input=\"onModelChanged\"\n          @click:date2=\"onClickDate2\"\n          @click:day:header2=\"onClickDayHeader2\"\n          @click:time2=\"onClickTime2\"\n          @click:column2=\"onClickColumn2\"\n          @click:column:header2=\"onClickColumnHeader2\"\n        >\n          <template #day-body=\"{ timestamp }\">\n            <template v-for=\"(agenda) in getAgenda(timestamp)\">\n              <div\n                :key=\"timestamp.date + agenda.time\"\n                :label=\"agenda.time\"\n                class=\"justify-start q-ma-sm shadow-5 bg-grey-6\"\n              >\n                <div v-if=\"agenda.avatar\" class=\"row justify-center\" style=\"margin-top: 30px; width: 100%;\">\n                  <q-avatar style=\"margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;\">\n                    <img :src=\"agenda.avatar\" style=\"border: #9e9e9e solid 5px;\">\n                  </q-avatar>\n                </div>\n                <div class=\"col-12 q-px-sm\">\n                  <strong>{{ agenda.time }}</strong>\n                </div>\n                <div v-if=\"agenda.desc\" class=\"col-12 q-px-sm\" style=\"font-size: 10px;\">\n                  {{ agenda.desc }}\n                </div>\n              </div>\n            </template>\n          </template>\n        </q-calendar>\n      </div>\n    </div>\n    <q-card class=\"events col-4 q-pa-xs full-height column justify-start items-start\">\n      <q-item-section class=\"full-width\">\n        <q-item-label>Events</q-item-label>\n        <q-item-label class=\"my-text-caption\">New data appended to top</q-item-label>\n      </q-item-section>\n      <q-separator />\n      <div class=\"scroll overflow-auto\" style=\"height: 360px; width: 100%;\">\n        <div v-for=\"(event, index) in events\" :key=\"index\" class=\"col-12\" style=\"font-size: 10px; line-height: 10px; max-height: 14px; min-height: 14px; padding: 2px 2px; white-space: nowrap;\">\n          {{ event }}\n        </div>\n      </div>\n    </q-card>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      events: [],\n      agenda: {\n        // value represents day of the week\n        1: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',\n            desc: 'Meeting with CEO'\n          },\n          {\n            time: '08:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png',\n            desc: 'Meeting with HR'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',\n            desc: 'Meeting with Karen'\n          }\n        ],\n        2: [\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',\n            desc: 'Meeting with Alisha'\n          },\n          {\n            time: '17:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',\n            desc: 'Meeting with Sarah'\n          }\n        ],\n        3: [\n          {\n            time: '08:00',\n            desc: 'Stand-up SCRUM',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '10:00',\n            desc: 'Sprint planning',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'\n          }\n        ],\n        4: [\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          }\n        ],\n        5: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '09:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'\n          },\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          },\n          {\n            time: '13:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '14:00',\n            avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'\n          },\n          {\n            time: '14:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png'\n          },\n          {\n            time: '15:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '15:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '16:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          }\n        ]\n      },\n      leftColumnOptions: [\n        {\n          id: 'over-due',\n          label: 'Over Due'\n        }\n      ],\n      rightColumnOptions: [\n        {\n          id: 'summary',\n          label: 'Summary'\n        }\n      ]\n    }\n  },\n\n  methods: {\n    getAgenda (day) {\n      return this.agenda[parseInt(day.weekday, 10)]\n    },\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n    onModelChanged (date) {\n      this.events.unshift(`Model changed: ${date}`)\n    },\n    onClickDate2 (data) {\n      this.events.unshift(`click:date2: ${JSON.stringify(data)}`)\n    },\n    onClickDayHeader2 (data) {\n      this.events.unshift(`click:day:header2: ${JSON.stringify(data)}`)\n    },\n    onClickTime2 (data) {\n      this.events.unshift(`click:time2: ${JSON.stringify(data)}`)\n    },\n    onClickColumn2 (data) {\n      this.events.unshift(`click:column2: ${JSON.stringify(data)}`)\n    },\n    onClickColumnHeader2 (data) {\n      this.events.unshift(`click:column:header2: ${JSON.stringify(data)}`)\n    }\n  }\n}\n<\/script>\n<style lang=\"sass\" scoped>\n.my-text-caption\n  font-size: 0.7rem\n  font-weight: 400\n  line-height: .75rem !important\n  letter-spacing: 0.03333em\n</style>\n"}}]);