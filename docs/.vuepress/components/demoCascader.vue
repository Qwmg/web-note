<template>
    <a-card title="Cascader Demo" style="margin: 8px 0">
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
                cascader: {
                    itemType: 'cascader',
                    label: 'Lazy Load Cascader',
                    searchOriginCondition: {
                        lazyLoad: true,
                        searchKey: 'value',
                        labelKey: 'label',
                        valueKey: 'value',
                        requestFn: (query = {}) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const arr = this.getFlattenArr().filter(item => item.parentId === query.parentId);
                                    resolve(arr);
                                }, 1000);
                            });
                        },
                    },
                },
                flattenCascader: {
                    itemType: 'cascader',
                    label: 'All Flatten Array Data Cascader',
                    searchOriginCondition: {
                        parentKey: 'parentId',
                        childKey: 'value',
                        labelKey: 'label',
                        valueKey: 'value',
                        requestFn: (query = {}) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve(this.getFlattenArr());
                                }, 1000);
                            });
                        },
                    },
                },
            },
        }
    },
    methods: {
        getFlattenArr () {
            const arr = [];

            for(let i = 0; i < 5; i++) {
                arr.push({
                    label: `${i}-label`,
                    value: i.toString(),
                    parentId: undefined,
                });
                for (let j = 0; j < 5; j++) {
                    arr.push({
                        label: `${i}-${j}-label`,
                        value: `${i}-${j}`,
                        parentId: i.toString(),
                    });
                }
            }

            return arr;
        }
    },
}
</script>
