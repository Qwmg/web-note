<template>
    <a-card title="Select Demo" style="margin: 8px 0">
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
                selectOption: {
                    itemType: 'select',
                    label: 'Select Option',
                    placeholder: 'please select some one',
                    showSearch: true,
                    allowClear: true,
                    dataSource: [
                        {
                            label: 'option one',
                            value: '1',
                        },
                        {
                            label: 'option two',
                            value: '2',
                        }
                    ],
                    decorator: {
                        rules: [{ required: true, message: 'Please select your choice!' }],
                    },
                    // whatever antd props you want (like disabled, allowClear...)

                    // whatever antd events you want
                    listeners: {
                        change (e) {
                            console.log('select change:', e);
                        },
                    }
                },
                asyncSelect: {
                    itemType: 'select',
                    label: 'Async Select Option',
                    placeholder: 'please enter your search and select some one',
                    showSearch: true,
                    decorator: {
                        rules: [{ required: true, message: 'Please select your choice!' }],
                    },
                    searchAsync: true, // need real time asynchronous query
                    searchOriginCondition: {
                        labelKey: 'label', // default: 'lable'
                        valueKey: 'value', // default: 'value'
                        requestFn (query = {}) {
                            if (!query.key) return Promise.resolve([]);
                            return new Promise(resolve => {
                                setTimeout(() => {
                                    const arr = [];
                                    for (let i = 0; i < 10; i++) {
                                        arr.push({
                                            label: `${query.key}-label-${i}`,
                                            value: i,
                                        })
                                    }
                                    resolve(arr);
                                }, 2000);
                            });
                        },
                    },
                    // whatever antd props you want (like disabled, allowClear...)

                    // whatever antd events you want
                    listeners: {
                        change (e) {
                            console.log('select change:', e);
                        },
                    }
                },
            }
        }
    },
}
</script>
