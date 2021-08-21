<template>
  <q-card>
    <q-expansion-item
      :header-class="headerColor(simulation.status)"
      expand-icon-class="text-white"
    >
      <template #header>
        <q-item-section avatar>
          <q-avatar
            color="primary"
            text-color="white"
          >
            {{ simulation.user_email[0].toUpperCase() }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ simulation.user_email }}
          </q-item-label>
          <q-item-label>
            {{ txtStatus(simulation.status) }}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Data realizada: {{ simulationDataMade }}
          </q-item-label>
        </q-item-section>
      </template>

      <q-card class="text-black">
        <q-card-section class="bg-grey-1">
          <q-icon
            name="fas fa-clock"
          />
          Duração da prova: {{ simulationDuration }}
        </q-card-section>
        <q-separator />

        <q-card-section>
          <div class="flex justify-between">
            <span>
              <q-icon
                color="green"
                name="fas fa-check-circle"
              />
              Acertos: {{ simulation.answer_statistics.correct }} <br>
            </span>

            <span>
              <q-icon
                color="red"
                name="fas fa-times-circle"
              />
              Erros: {{ simulation.answer_statistics.wrong }} <br>
            </span>

            <span>
              <q-icon
                color="grey"
                name="fas fa-minus-circle"
              />
              Em branco: {{ simulation.answer_statistics.blanc }} <br>
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-card>
</template>

<script>
export default {
  name: 'Simulation',
  props: {
    simulation: {
      type: Object,
      required: true
    },
  },

  computed: {
    simulationDataMade() {
      let formattedDate = this.simulation.date_made.slice(5, -4)

      return this.$dayjs(formattedDate, 'DD MMM YYYY hh:mm:ss').format('DD/MM/YYYY HH:mm:ss')
    },
    simulationDuration() {
      let duration = this.simulation.duration
      if (duration) {
        const minuteUnit = 60
        const hourUnit = minuteUnit * 24

        let datas = []

        if (duration >= hourUnit) {
          let hour = Math.floor(duration/hourUnit)
          datas.push(this.formatUnitTxt('hora', hour))
          duration = duration%hourUnit
        }

        if (duration >= minuteUnit) {
          let minute = Math.floor(duration/minuteUnit)
          datas.push(this.formatUnitTxt('minuto', minute))
          duration = duration%minuteUnit
        }

        if (duration) {
          datas.push(this.formatUnitTxt('segundo', duration))
        }


        let texts = datas.filter((text => text))

        if (texts.length === 1) {
          return texts[0]
        }

        let formattedText = ''
        let lastData = texts.splice(-1)
        formattedText = texts.join(', ').concat(` e ${lastData}`)

        return formattedText
      }

      return '-'
    }
  },

  mounted () {

  },

  methods: {
    txtStatus(status) {
      let txtStatus = {
        'started': 'Iniciado',
        'finished': 'Finalizado',
        'canceled': 'Cancelado'
      }

      return txtStatus[status] ?? 'Status desconhecido'
    },

    headerColor(status) {
      let headerColor = {
        'started': ['bg-grey-6', 'text-white'],
        'finished': ['bg-positive', 'text-white'],
        'canceled': ['bg-negative', 'text-white']
      }
      return headerColor[status] ?? null
    },

    formatUnitTxt(unit, value) {
      if (value === 1) {
        return `${value} ${unit}`
      }
      return `${value} ${unit}s`
    }
  },
}
</script>

<style scoped>

</style>
