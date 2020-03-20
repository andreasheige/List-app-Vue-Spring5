export default {
  name: 'MessageListItem',
  template: `<li class="list-line">{{ item.text }} - {{ item.createdAt | datetime }} 
    <button @click="deleteClicked" class="delete-button">X</button></li>`,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteClicked () {
      this.$emit('delete');
    }
  }
}; 