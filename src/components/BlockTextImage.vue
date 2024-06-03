<script setup lang="ts">
import { watch } from "vue"

const props: any = defineProps({
  block: {
    type: Object,
  },
  index: {
    type: Number
  }
})

const content = props.block.content
const emit = defineEmits(['update:block', 'deleteBlock:block'])

const upLoadFile = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      content.img = e.target.result;
    };
    fileReader.readAsDataURL(file);
  }
}

watch(content, () => {
  emit('update:block', content, props.index)
})
</script>

<template>
  <div class="block-text-image"
    :style = "{ flexDirection: content.reverse ? 'row-reverse' : 'row' }">
    <div class="block-text-image__text-column">
      <input class="block-text-image__title"
        v-model="content.title" 
        placeholder="Заголовок" 
      />
      <textarea class="block-text-image__text"    
        v-model="content.text">
      </textarea>
    </div>
      <div class="block-text-image__image-column">
        <img v-if="content.img" 
          class="block-text-image__image"
          :src="content.img" 
          width="150"
          alt="Изображение"
        /> 
        <input type="file" 
          class="block-text-image__image-input"
          @change="upLoadFile" 
          accept="image/*" />
      </div> 
  </div>

  <div class="block-text-image__control-section">
      <input type="checkbox"
        v-model="content.reverse"
        id="reverse">
      <label for="reverse">
        Реверсировать
      </label>

      <input type="color"
        v-model="content.backgroundColor"
        id="background-color-img">
      <label for="background-color-img">
        Фон блока
      </label>

    <button class="block-text-image__delete"
      @click="$emit('deleteBlock:block', props.index)">
      X
    </button>
  </div>
  
</template>

<style lang="scss" scoped>
.block-text-image {
    display: flex;
    margin-top: 50px;
    &__image-column {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-left: 100px;
    }
    &__text-column {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    &__title {
        height: 30px;
    }
    &__text {
        height: 200px;
        padding: 10px;
        margin-top: 20px;
        text-align: left;
    }
    &__image {
        width: 150px;
    }
    &__image-input{
        margin-top: 20px;
    }
    &__delete {
      margin-top: 20px;
      margin-left: 10px;
      font-size: 20px;
    }
    &__control-section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: baseline;
    }
}



</style>