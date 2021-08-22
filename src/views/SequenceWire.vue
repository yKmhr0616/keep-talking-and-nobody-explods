<template>
    <div class="wrap">
      <b-row>
        <b-btn @click="clearSequenceWire">クリア</b-btn>
      </b-row>
      <b-card-group deck class="sequence_wire">
          <b-card
            border-variant="light"
            header="赤いワイヤの出現回数"
            header-bg-variant="light"
           >
            <b-container fluid="sm">
              <b-row class="text-center">
                <b-col >ワイヤの出現回数</b-col>
                <b-col>切るべき接続先</b-col>
              </b-row>
              <b-row class="text-center" v-for="(color, index) in sequenceWire.red" :key="index" :class="{activeColor:color.isColor}" @click="color.isColor = !color.isColor">
                <b-col>{{index + 1}}番目の出現（赤）</b-col>
                <b-col>{{color.text}}</b-col>
              </b-row>
            </b-container>
          </b-card>
          <b-card
            border-variant="light"
            header="赤いワイヤの出現回数"
            header-bg-variant="light"
           >
            <b-container fluid="sm">
              <b-row>
                <b-col>ワイヤの出現回数</b-col>
                <b-col>切るべき接続先</b-col>
              </b-row>
              <b-row v-for="(color, index) in sequenceWire.blue" :key="index" :class="{activeColor:color.isColor}" @click="color.isColor = !color.isColor">
                <b-col>{{index + 1}}番目の出現（青）</b-col>
                <b-col>{{color.text}}</b-col>
              </b-row>
            </b-container>
          </b-card>
          <b-card 
            border-variant="light"
            header="赤いワイヤの出現回数"
            header-bg-variant="light"
           >
            <b-container fluid="sm">
              <b-row>
                <b-col>ワイヤの出現回数</b-col>
                <b-col>切るべき接続先</b-col>
              </b-row>
              <b-row v-for="(color, index) in sequenceWire.black" :key="index" :class="{activeColor:color.isColor}" @click="color.isColor = !color.isColor">
                <b-col>{{index + 1}}番目の出現（黒）</b-col>
                <b-col>{{color.text}}</b-col>
              </b-row>
            </b-container>
          </b-card>
      </b-card-group>
    </div>
</template>

<script>
export default {
    name:"SequenceWire",
    data(){
        return {
            sequenceWire:{
            red:[   {isColor:false,text:"C"},{isColor:false, text:"B"},{isColor:false,text:"A"},
                    {isColor:false,text:"AかC"},{isColor:false, text:"B"},{isColor:false,text:"AかC"},
                    {isColor:false,text:"AかBかC"},{isColor:false,text:"AかB"},{isColor:false, text:"B"}],
            blue:[  {isColor:false, text:"B"},{isColor:false,text:"AかC"},{isColor:false, text:"B"},
                    {isColor:false,text:"A"},{isColor:false, text:"B"},{isColor:false, text:"BかC"},
                    {isColor:false,text:"C"},{isColor:false,text:"AかC"},{isColor:false,text:"A"}],
            black:[ {isColor:false,text:"AかBかC"},{isColor:false,text:"AかC"},{isColor:false, text:"B"},
                    {isColor:false,text:"AかC"},{isColor:false, text:"B"},{isColor:false, text:"BかC"},
                    {isColor:false,text:"AかB"},{isColor:false,text:"C"},{isColor:false,text:"C"}]
            }
        };
    },

    methods:{
        clearSequenceWire(){
        const clearColor = e => e.isColor = false;
        this.sequenceWire.red.forEach(clearColor);
        this.sequenceWire.blue.forEach(clearColor);
        this.sequenceWire.black.forEach(clearColor);
        }
    },
}
</script>

<style scoped>
 .sequence_wire{
   /* display: flex; */
 }

 .sequence_wire .row{
   padding: 1rem 0;
 }

 .activeColor{
   color: white;
   background-color: #444444;
 }


</style>