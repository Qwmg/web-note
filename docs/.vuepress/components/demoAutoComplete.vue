<template>
    <a-card title="Auto Complete Demo" style="margin: 8px 0">
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
                autoComplete: {
                    itemType: 'auto-complete',
                    label: 'Auto Complete',
                    searchOriginCondition: {
                        requestFn (query = {}) {
                            return Promise.resolve([
                                'option-0',
                                'option-1',
                                'option-2',
                            ]);
                        },
                    },
                },
                autoCompleteSearch: {
                    itemType: 'auto-complete',
                    label: 'Auto Complete Search',
                    searchAsync: true,
                    searchOriginCondition: {
                        requestFn (query = {}) {
                            return Promise.resolve([
                                `option-0-${query.key || 'key'}`,
                                `option-1-${query.key || 'key'}`,
                                `option-2-${query.key || 'key'}`,
                            ]);
                        },
                    },
                },
            }
        }
    },
}
</script>
