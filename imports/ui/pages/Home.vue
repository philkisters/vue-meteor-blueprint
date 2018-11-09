<template>
    <div class="uk-section uk-section-primary">
        <div class="uk-container">
            <h1>Vue-Meteor-Blueprint</h1>
            <p>This Blueprint gives you a simple OnePage-App using MeteorJS, VueJS, and UIkit2.</p>
            <br>
            <example-component></example-component>
        </div>
    </div>
</template>
<script>
import ExampleComponent from '/imports/ui/components/ExampleComponent.vue';
export default {
    data () {
        return {
        }
    },
    methods: {
        
    },
    components:  {
        ExampleComponent
    }
}
</script>
<style>

</style>

