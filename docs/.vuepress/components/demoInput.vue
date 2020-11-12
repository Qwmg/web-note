<template>
    <a-card title="Input Demo" style="margin: 8px 0">
        <midea-edit-form
            ref="form"
            :value="formValue"
            :map="formMap"></midea-edit-form>
    </a-card>
</template>

<script>

export default {
    data () {
        return {
            formValue: {},
            formMap: {
                email: {
                    itemType: 'input',
                    label: 'Email',
                    decorator: {
                        rules: [{
                            required: true,
                            type:'email',
                            message: 'Please enter a valid email'
                        }],
                    },
                    // whatever antd props you want (like disabled, type...)

                    // whatever antd events you want
                    listeners: {
                        input (e) {
                            console.log(e.target.value);
                        },
                    }
                },
            }
        }
    },
}
</script>
