# EditForm

## Demo

>use edit form

<demo></demo>

<details>
  <summary>code</summary>

  <<< @/docs/.vuepress/components/demo.vue{20-21,119-133,135-139}
</details>

## props.map

>form item map config

## props.map.itemType

### input

<demoInput></demoInput>
<details>
  <summary>code</summary>

  <<< @/docs/.vuepress/components/demoInput.vue{27-34}
</details>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| a-input props | [Please refer to this link for details](https://antdv.com/components/input/#Input) | -- | -- |
| listeners | [a-input event gather, Please refer to this link for details](https://antdv.com/components/input/#Input) | Object | {} |

### select

<demoSelect></demoSelect>
<details>
  <summary>code</summary>

  <<< @/docs/.vuepress/components/demoSelect.vue{23-32,36,38-43,53-72}
</details>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| a-select props | [Please refer to this link for details](https://antdv.com/components/select/#Select-props) | -- | -- |
| listeners | [a-select event gather, Please refer to this link for details](https://antdv.com/components/select/#events) | Object | {} |
| searchAsync | Is asynchronous query supported | Boolean | false |
| searchOriginCondition | Get data parameters asynchronously | Object | {} |
| searchOriginCondition.requestFn | Asynchronous interface, <b>must return Promise and resolve Array-Object</b> | Function | () => Promise.resolve([]) |
| searchOriginCondition.labelKey | label key  | String | 'label' |
| searchOriginCondition.valueKey | value key | String | 'value' |


### cascader

<demoCascader></demoCascader>
<details>
  <summary>code</summary>

  <<< @/docs/.vuepress/components/demoCascader.vue{21-22,25-32,39-40,43-49}
</details>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| a-cascader props | [Please refer to this link for details](https://antdv.com/components/cascader/#API) | -- | -- |
| listeners | [a-cascader event gather, Please refer to this link for details](https://antdv.com/components/cascader/#events) | Object | {} |
| searchAsync | Is asynchronous query supported | Boolean | false |
| searchOriginCondition | Get data parameters asynchronously | Object | {} |
| searchOriginCondition.requestFn | Asynchronous interface, <b>must return Promise and resolve Array-Object</b> | Function | () => Promise.resolve([]) |
| searchOriginCondition.labelKey | label key  | String | 'label' |
| searchOriginCondition.valueKey | value key | String | 'value' |
| searchOriginCondition.lazyLoad | Whether the interface is piecewise loaded | Boolean | false |
| searchOriginCondition.searchKey | When lazyLoad is <b>true</b>, searchKey is <b>required</b>, <b></b>searchKey will be requestFn's params(query.parentId) | String | 'value' |
| searchOriginCondition.parentKey | When lazyLoad is <b>false</b>, parentKey is <b>required</b>, parentKey is option's <b>parent identification key</b> | String | -- |
| searchOriginCondition.childKey | When lazyLoad is <b>false</b>, childKey is <b>required</b>, childKey is option's <b>own identification key</b> | String | -- |

### auto-complete

<demoAutoComplete></demoAutoComplete>
<details>
  <summary>code</summary>

  <<< @/docs/.vuepress/components/demoAutoComplete.vue{22-26,33,36-40}
</details>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| a-auto-complete props | [Please refer to this link for details](https://antdv.com/components/auto-complete/#API) | -- | -- |
| listeners | [a-auto-complete event gather, Please refer to this link for details](https://antdv.com/components/auto-complete/#events) | Object | {} |
| searchAsync | Is asynchronous query supported | Boolean | false |
| searchOriginCondition | Get data parameters asynchronously | Object | {} |
| searchOriginCondition.requestFn | Asynchronous interface, <b>must return Promise and resolve Array-String</b> | Function | () => Promise.resolve([]) |

### others itemType

>[See ant-design-vue docs](https://antdv.com/docs/vue/introduce)

## props.value

>default value

<a href="#demo">see demo</a>

## props.renderConfig

>grid layout & style reset

<demoLayout></demoLayout>

<details>
  <summary>code</summary>

  <<< @/docs/.vuepress/components/demoLayout.vue{30-37,79-83,88-95}
</details>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| row | [Please refer to this link for details](https://antdv.com/components/grid/#Row) | Object | { gutter: 24 } |
| col | [Please refer to this link for details](https://antdv.com/components/grid/#Col) | Object | { xl: 8, lg: 12, md: 24 } |


## events

### form events

| event | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| validate | Validate form, <a href="#demo">see demo</a>. <b>Events need to be triggered manually</b> | Function | -- |
| reset | reset form, <a href="#demo">see demo</a>. <b>Events need to be triggered manually</b> | Function | -- |

### form item events

| event | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| init | init form item, <a href="#demo">see demo</a>. <b>Events need to be triggered manually</b> | Function | -- |