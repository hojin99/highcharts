<template>
  <div>
    <el-select v-model="chartType" @change="changeChartType" placeholder="Select Chart Type">
        <el-option
        v-for="item in chartTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>   

    <highcharts
    :options="chartOptions"
    ref="chart"
    ></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue';

export default {
    components: {
        highcharts: Chart 
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type:'line'
                },
                title: {
                    text: '년도 별 성적'
                },
                subtitle: {
                    text: '(수학)'
                },
                series: [{
                    name: "철수",
                    data: [10,0,8,1,2,3,9,7,3]
                },{
                    name: "영희",
                    data: [5,4,8,8,5,1,3,3,6]
                },{
                    yAxis: 1,
                    name: "James",
                    data: [50,40,90,40,50,10,50,40,60]
                }
                ],
                yAxis: [{
                    title: { text: "점수1" }, // y축 제목
                    labels: { // y축 라벨 포맷
                        formatter: function() {
                            return this.value + '점'  
                        }
                    },
                    // tickInterval : 1, // tick 간격 (multi axes일 경우 반영 안됨)
                    gridLineWidth : 1 // y축 grid line의 두께
                },{
                    title: { text: "점수2" }, // y축 제목
                    labels: { // y축 라벨 포맷
                        formatter: function() {
                            return this.value + '점'  
                        }
                    },
                    // tickInterval : 1, // tick 간격 (multi axes일 경우 반영 안됨)
                    gridLineWidth : 1, // y축 grid line의 두께
                    opposite: true
                }],
                xAxis: {
                    title: { text: "년도" }, // x축 제목
                    labels: { // x축 라벨 포맷
                        formatter: function() {
                            return this.value + '년'  
                        }
                    },
                    tickInterval : 1, // tick 간격
                    gridLineWidth : 1 // x축 grid line의 두께
                    
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2013
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
            },
            chartType : 'line',
            chartTypes :[
                {label:'line', value:'line'},
                {label:'spline', value:'spline'},
                {label:'area', value:'area'},
                {label:'areaspline', value:'areaspline'},
                {label:'column', value:'column'},
                {label:'bar', value:'bar'},
            ]
        }
    },
    methods: {
        changeChartType() {
            this.$refs.chart.options.chart.type = this.chartType;
        }
    }

}
</script>

<style>

</style>