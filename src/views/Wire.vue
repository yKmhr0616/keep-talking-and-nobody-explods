<template>
    <div class="wrap">
        <b-form-radio-group
            :options="inputItems.colors"
         >
        </b-form-radio-group>
    </div>
</template>

<script>
export default {
    name:"Wire",
    data(){
        return {
            inputItems:{
                colors:{
                    white:{color:"white", text:"白", value:"white"},
                    black:{color:"black", text:"黒", value:"black"}
                },
                wire_type3:["white","white","white"],
                wire_type4:["white","white","white","white",],
                wire_type5:["white","white","white","white","white",],
                wire_type6:["white","white","white","white","white","white"],
            },
        };
    },
}
</script>
