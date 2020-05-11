
<script>
import { Doughnut, mixins} from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
    extends: Doughnut,
    mixins : [
        reactiveProp
    ],
    props: ["chartData", "options"],
    mounted() {
        this.renderChart(this.chartData,{
            borderWidth: "10px",
            hoverBackgroundColor: "red",
            hoverBorderWidth: "10px"
        })
    }
    

}
</script>

<style scoped>

</style>