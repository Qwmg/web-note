<template>
    <a-card title="Demo" style="margin: 8px 0">
        <midea-edit-form
            ref="form"
            :value="formValue"
            :map="formMap"></midea-edit-form>
        <a-button type="default" @click="initSelect">initSelect</a-button>
        <a-button type="primary" @click="handleValidate">validate</a-button>
        <a-button type="default" @click="handleReset">reset</a-button>
    </a-card>
</template>

<script>
import moment from 'moment';

export default {
    data () {
        return {
            formValue: {
                contactName: ['first', null, 'last'],
                phoneNumber: [86, 12345678912],
            },
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
                },
                select: {
                    itemType: 'select',
                    label: 'Select Option',
                    placeholder: 'please select some one',
                    searchOriginCondition: {
                        labelKey: 'label', // default: 'lable'
                        valueKey: 'value', // default: 'value'
                        requestFn (query = {}) {
                            return new Promise(resolve => {
                                setTimeout(() => {
                                    const arr = [];
                                    for (let i = 0; i < 10; i++) {
                                        arr.push({
                                            label: `${+new Date()}-label-${i}`,
                                            value: i,
                                        })
                                    }
                                    resolve(arr);
                                }, 2000);
                            });
                        },
                    },
                    decorator: {
                        rules: [{ required: true, message: 'Please select your choice!' }],
                    },
                },
                contactName: {
                    itemType: 'name-input',
                    label: 'Contact Name',
                    needMiddleName: true,
                    decorator: {
                        rules: [{
                            required: true,
                            type: 'array',
                            validator (rule, value = [], callback) {
                                let errors = [];
                                if (!value[value.length - 1]) {
                                    errors.push('');
                                }
                                return errors;
                            },
                            message: 'Please enter the last name'
                        }]
                    },
                },
                phoneNumber: {
                    itemType: 'select-input-group',
                    label: 'Phone Number',
                    decorator: {
                        rules: [{
                            required: true,
                            type: 'array',
                            validator (rule, value = [], callback) {
                                let errors = [];
                                if (!value[0] || !value[1]) {
                                    errors.push('');
                                }
                                return errors;
                            } 
                        }]
                    },
                    dataSource: [
                        {
                            label: 86,
                            value: 86
                        },
                        {
                            label: 65,
                            value: 65
                        },
                    ]
                },
                date: {
                    itemType: 'date-picker',
                    label: 'Date',
                    disabledDate (current) {
                        // Can not select days after today
                        return current && current > moment().endOf('day');
                    }
                },
                render: {
                    label: 'render',
                    render: (h, ctx) => <a-input v-decorator={['render', {
                        rules: [{
                            required: true,
                        }]
                    }]} />
                },
            }
        }
    },
    methods: {
        handleValidate () {
            this.$refs.form.validate((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                else {
                    console.log('err:', err);
                }
            });
        },
        handleReset () {
            this.$refs.form.reset({
                phoneNumber: [86, 12345678912]
            });
        },

        initSelect () {
            this.$formCommonFn.getFormItemVm(this.$refs.form, 'select').init().then(_ => {
                this.$message.success('select init success');
            });
        }
    }
}
</script>
