<script>
import AddContactForm from '@/components/AddContactForm.vue'
import ContactsList from '@/components/ContactsList.vue'
export default {
  components: {
    AddContactForm,
    ContactsList
  },
  methods: {
    forceRerender() {
      this.componentKey ++;
    }
  },
  data() {
    return {
      componentKey: null
    }
  }

}
</script>

<template>
  <div class="contacts-view">
    <AddContactForm @updated="forceRerender"/>
    <hr class="separator">
    <ContactsList :key="componentKey"/>
  </div>
</template>

<style>
.contacts-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.separator {
  width: 100%;
}
</style>