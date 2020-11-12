<template>
    <div>
        <a-card title="Layout1 Demo" style="margin: 8px 0">
            <midea-edit-form
                ref="form"
                :map="formMap"
                :renderConfig="renderConfig1"></midea-edit-form>
        </a-card>
        <a-card title="Layout2 Demo" style="margin: 8px 0">
            <midea-edit-form
                ref="form"
                :map="formMap"
                :renderConfig="renderConfig2"></midea-edit-form>
        </a-card>
        <a-card title="Layout3 Demo" style="margin: 8px 0">
            <midea-edit-form
                ref="form"
                :map="formMap3"
                :renderConfig="renderConfig1"></midea-edit-form>
        </a-card>
    </div>
</template>

<script>

export default {
    data () {
        return {
            renderConfig1: {
                row: {
                    gutter: 24,
                },
                col: {
                    xl: 12,
                    lg: 12,
                    md: 24,
                },
            },
            renderConfig2: {
                row: {
                    gutter: 24,
                },
                col: {
                    xl: 8,
                    lg: 12,
                    md: 24,
                },
            },
            formMap: {
                input1: {
                    itemType: 'input',
                    label: 'input1',
                },
                input2: {
                    itemType: 'input',
                    label: 'input2',
                },
                input3: {
                    itemType: 'input',
                    label: 'input3',
                },
                input4: {
                    itemType: 'input',
                    label: 'input4',
                },
            },
            formMap3: {
                input1: {
                    itemType: 'input',
                    label: 'input1',
                },
                input2: {
                    itemType: 'input',
                    label: 'input2',
                },
                input3: {
                    itemType: 'input',
                    label: 'input3',
                    col: {
                        xl: 24,
                        lg: 24,
                        md: 24,
                    },
                },
                input4: {
                    itemType: 'input',
                    label: 'input4',
                    col: {
                        xl: 24,
                        lg: 24,
                        md: 24,
                    },
                    style: {
                        width: 'calc(50% - 12px)'
                    }
                },
                input5: {
                    itemType: 'input',
                    label: 'input5',
                },
            }
        }
    },
}
</script>
