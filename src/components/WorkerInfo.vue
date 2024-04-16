<template>
  <div class="container-work">
    <h2 class="worker-fio">
      {{ workerObj[0].fio }}
    </h2>
    <p class="work-dscr">
      {{ workerObj[0].dateBirthday }}
    </p>
    <span class="work-number">
      {{ workerObj[0].numberOfWorker }}
    </span>
    <span class="work-proffesion">
      {{ workerObj[0].profession }}
    </span>
  </div>
</template>


<script>
export default
  {
    data() {
      return {
        workerObj: [
          {
            fio: 'Моисеев Михаил Сергеевич',
            dateBirthday: '13.08.1980',
            numberOfWorker: 'Таб №: ГОКИ 0000',
            profession: 'Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда'
          },
          {
            fio: 'Моисеев Михаил Сергеевич',
            dateBirthday: '13.08.1980',
            numberOfWorker: 'Таб №: ГОКИ 0000',
            profission: 'Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда'
          },
          {
            fio: 'Моисеев Михаил Сергеевич',
            dateBirthday: '13.08.1980',
            numberOfWorker: 'Таб №: ГОКИ 0000',
            profission: 'Электрослесарь (слесарь дежурный и по ремонту оборудования) I раз}ряда'
          }
        ]
      }
    }

  }
</script>

<style>
.container-work {
  background-color: #56698f;
  padding: 10px 15px;
}

.worker-fio {
  font-weight: 700;
  font-size: 32px;
  color: #f2f2f2;
}

.work-dscr {
  font-weight: 600;
  font-size: 24px;
  color: #f2f2f2;
}

.work-number {
  display: block;
  font-weight: 600;
  font-size: 16px;
  color: #f2f2f2;
  margin-bottom: 10px;
}

.work-proffesion {
  font-weight: 600;
  font-size: 16px;
  color: #f2f2f2;
}
</style>