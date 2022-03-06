<template>
  <div>
      <highcharts
        :options="chartOptions"
      ></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue';
import highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';

exportingInit(highcharts);

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
                    text: '2021년 성적'
                },
                subtitle: {
                    text: '(수학)'
                },
                series: [{
                    name: "철수",
                    data: [10,0,8,1,2,3]
                },{
                    name: "영희",
                    data: [5,4,8,8,5,1]
                }
                ],
                yAxis: {
                    title: { text: "점수" }
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2016
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
            }
        }
    },


}
</script>

<style>

</style>