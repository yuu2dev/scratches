<template>
    <div class="chart">
        <line-chart
            ref="my-chart"
            :chart-data="{ datasets: getDatasets }" 
            :chart-options="chartOptions"
        />
        <ul>
            <li v-for="label of labels" :key="label.text">
                <v-btn @click="toggleLegend(label)">{{ label.text }}</v-btn>
            </li>
        </ul>
    </div>
</template>
<script>
import { Line as LineChart } from 'vue-chartjs/legacy'
import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
} from 'chart.js'
import { mapGetters } from 'vuex'
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)
export default {
    name: 'HomePage',
    components: {
        LineChart
    },
    data () {
        return {
            chartOptions: {
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {                        
                        display: true,
                        beginAtZero: true
                    }
                },
            },
            labels: []
        }
    },
    computed: {
        ...mapGetters(['getLabels', 'getDatasets'])
    },
    mounted () {
        this.setLabels()
        this.$store.dispatch('unitTest001')
    },
    methods: {
        setLabels () {
            const chart = this.$refs['my-chart']._data._chart
            const labels = chart.legend.options.labels.generateLabels(chart)
            this.labels = labels
        },
        toggleLegend (label) {
            const chart = this.$refs['my-chart']._data._chart
            // 파이나 도너츠일경우 하나의 아이템만 가짐
            // chart.toggleDataVisibility(item.index);
            chart.setDatasetVisibility(label.datasetIndex, !chart.isDatasetVisible(label.datasetIndex));
            chart.update();
        }
    },
    watch: {
        getDatasets () {
            this.$nextTick(() => {
                this.setLabels()
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.chart {
    width: 100%;
    &-btns {
        text-align: center;
    }
}
</style>