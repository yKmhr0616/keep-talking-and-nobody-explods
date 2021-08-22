<template>
    <div class="wrap">
        <div>鋭意製作中</div>
        <b-form-checkbox-group
            v-model="selected"
            :options="optionsWire"
         >
        </b-form-checkbox-group>
        <b-form-checkbox-group
            v-model="selected"
            :options="optionCase"
         >
        </b-form-checkbox-group>
         <div>{{bitCut()}}</div>
    </div>
</template>
<script>
export default {
    name:"ComplicatedWire",
    data(){
        return {
            selectedCase:[],
            selectedWire:[],
            selected:[],
            optionsWire:[{text:"赤", value:0x08}, {text:"青", value:0x04}, {text:"星", value:0x02}, {text:"LED", value:0x01}],
            optionCase:[{text:"シリアルナンバーの最後の数字が偶数か", value:0x40}, {text:"パラレルポート", value:0x20}, {text:"バッテリーが二本以上", value:0x10}],
        };
    },

    computed:{
        
    },

    methods:{
        bitCut(){
            const bit = this.selected.reduce((acc, cur) => acc | cur, 0x00);
            let result = "切らない";

            //順番に白のみ、        (赤)星のみ、     バッテリー(赤)星LED、      赤LED、                  偶数かつ(赤または青)、LED
            if( !(bit & 0x0f) || (bit & 0x07) == 0x02 || (bit & 0x17) == 0x13 || (bit & 0x1f) == 0x19 || (bit & 0x43) == 0x40 || (bit & 0x4f) == 0x4d ||
            //
            (bit & 0x2d) == 0x25 
            )
            {
                result = "切る";
            }
            else
            {
                //切らない   
            }

            return result;
        },

        clearCheckboxCase(){
            this.selectedCase = [];
        },

        clearCheckboxWire(){
            this.selectedWire = [];
        },

        cut(){
            const existsWire = t => this.selectedWire.some(e => {
                console.log("t:",t, e);
                // return true;
                return t.some(type => e == type);
            });
            const existsCase = c => this.selectedCase.some(e => e == c);

            const CUT = "切る";
            const DONT_CUT = "切らない";

            let result = DONT_CUT;

            // 白のみ
            if(this.selectedWire.length == 0)
            {
                result = CUT;
            }

            // 星のみ
            if(this.selectedWire.length == 1 && existsWire(["star"]))
            {
                result = CUT;
            }

            // 星、LED バッテリー2本以上
            if(this.selectedWire.length == 2 && existsWire(["star", "led"] && existsCase("battery")))
            {
                result = CUT;
            }

            // 赤
            if(existsWire(["red"]))
            {
                // 赤のみ シリアルナンバー末尾が偶数
                if(this.selectedWire.length == 1 && existsCase("odd"))
                {
                    result = CUT;
                }

                // 赤、星
                if(this.selectedWire.length == 2 && existsWire(["star"]))
                {
                    result = CUT;
                }

                // (赤、LED) or (赤、星、LED) バッテリー2本以上
                if(!existsWire(["blue"]) && existsCase("battery"))
                {
                    result = CUT;
                }
            }

            // 青
            if(existsWire(["blue"]))
            {
                // 青のみ シリアルナンバー末尾が偶数
                if(this.selectedWire.length == 1 && existsCase("odd"))
                {
                    result = CUT;
                }

                // (青、LED) or (青、星、LED) パラレルポートあり
                if(!existsWire(["red"]) && existsCase("parallel"))
                {
                    result = CUT;
                }
            }

            // 赤、青
            if(existsWire(["red", "blue"]))
            {
                // (赤、青) or (赤、青、LED) シリアルナンバー末尾が偶数
                if(!existsWire(["star"]) && existsCase("odd"))
                {
                    result = CUT;
                }

                // 赤、青、星 パラレルポートあり
                if(this.selectedWire.length == 3 && existsWire(["star"]) && existsCase("parallel"))
                {
                    result = CUT;
                }
            }

            return result;
        }
    },
}    
</script>