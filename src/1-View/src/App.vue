<script setup lang="ts">
import { ref } from 'vue';
import {PeopleViewModel} from '../../2-Presentation/PeopleViewModel';
import type {Person} from '../../shared/Person';

const people = ref<Person[] | undefined>([]);

const props = defineProps({
  viewModel: { type: PeopleViewModel, required: true },
})

function refresh() {
  props.viewModel.RefreshPeople().then(() => {
    people.value = props.viewModel.people;
  });
}

function clear() {
  props.viewModel.ClearPeople().then(() => {
    people.value = props.viewModel.people;
  });
}
</script>

<template>
  <div id="app">
    <div class="container mt-5 p-5 border" style="min-height: 500px">
      <div class="row">
        <div class="col-4 d-flex flex-column justify-content-around">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-primary"
              type="button"
              @click="refresh()">Fetch People</button>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-danger"
              type="button"
              @click="clear()">Clear Data</button>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div
                v-for="p in people"
                :key="p.id"
                class="col-6 py-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ p.givenName }} {{ p.familyName }}</h5>
                  <h6 class="card-text text-end">{{ new Date(p.startDate).getFullYear() }}</h6>
                  <h6 class="card-text text-end">{{ p.rating }} / 10 Starts</h6>
                </div>
              </div>
            </div>
          </div>


          <div class="alert alert-secondary mt-3 text-center" role="alert">
            {{ viewModel.dataReaderType }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
