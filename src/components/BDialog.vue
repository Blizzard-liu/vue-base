<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :title="title"
      @closed="onClose"
      append-to-body
      :close-on-click-modal="false"
      width="1000px"
    >
      <el-form
        :model="formData"
        :rules="formRules"
        ref="myForm"
        class="form-content"
        label-width="110px"
      >
        <el-form-item label="信标ID：" prop="name">
          <el-input
            readonly
            style="width:220px"
            placeholder=""
            maxlength="6"
            v-model.trim="formData.name"
            clearable
          >
          </el-input>
        </el-form-item>

        <el-form-item label="信标型号：" prop="bbcId">
          <el-select
            v-model="formData.bbcId"
            clearable
            placeholder="请选择信标型号"
          >
            <el-option
              v-for="item in optionsType"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="信标归属：" prop="stationId">
          <el-cascader
            placeholder="请选择线路/站点"
            :options="treeData"
            v-model="formData.stationId"
            filterable
            :show-all-levels="false"
            :props="defprops"
            @change="getPlanList"
            clearable
          ></el-cascader>
        </el-form-item>

        <el-form-item label="地图名称：" prop="bbpId">
          <el-select
            v-model="formData.bbpId"
            clearable
            @change="changPlan"
            placeholder="请选择平面图"
          >
            <el-option
              v-for="item in optionsPlan"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="地理位置：" prop="location">
          <el-input
            style="width:220px"
            placeholder=""
            maxlength="20"
            v-model.trim="formData.location"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="安装高度：" prop="high">
          <el-input
            placeholder=""
            style="width:200px"
            maxlength="5"
            v-model.trim="formData.high"
            clearable
          >
          </el-input>
          m
        </el-form-item>

        <el-form-item label="生产日期：" prop="produceTime">
          <el-date-picker
            class="dialog-input-view"
            v-model="formData.produceTime"
            type="date"
            :picker-options="pickerOptions"
            placeholder="请选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="启用日期：" prop="installTime">
          <el-date-picker
            class="dialog-input-view"
            v-model="formData.installTime"
            type="date"
            placeholder="请选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <div class="right-view">
          <el-form-item label-width="126px" label="标注实际位置：" required>
            <el-col :span="11">
              <el-form-item prop="xaxis">
                X坐标
                <el-input
                  style="width:100px"
                  placeholder=""
                  maxlength="6"
                  @change="updateX"
                  v-model.trim="formData.xaxis"
                  clearable
                >
                </el-input>
                m
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-form-item prop="yaxis">
                Y坐标
                <el-input
                  style="width:100px"
                  placeholder=""
                  maxlength="6"
                  @change="updateY"
                  v-model.trim="formData.yaxis"
                  clearable
                >
                </el-input>
                m
              </el-form-item>
            </el-col>
          </el-form-item>
          <div class="container">
            <img
              :src="imgurl"
              alt=""
              id="image"
              style="width: 100%;"
              @load="initMap"
            />
          </div>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button size="medium" type="primary" @click="submitForm"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import 'taggd-manager/dist/taggd.css';
import Taggd from "taggd-manager";

export default {
  components: {},
  props: {
    mode: {
      type: String,
      default: "add" //add  edit
    },
    row: {
      type: Object,
      default: () => {}
    },
    treeData: {
      type: Array,
      default: () => []
    },

    optionsType: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dialogVisible: false,
      disabledSumbit: false,
      formData: {
        name: "",
        high: "",
        bbpId: "",
        bbcId: "",
        location: "",
        produceTime: "",
        installTime: "",
        xaxis: "",
        yaxis: "",
        stationId: ""
      },
      formRules: {
        location: [{ required: true, message: "请输入", trigger: "blur" }],
        bbpId: [{ required: true, message: "请选择地图", trigger: "change" }],
        installTime: [
          { required: true, message: "请选择日期", trigger: "change" }
        ],
        high: [
          { required: true, message: "请输入", trigger: "blur" },
          {
            pattern: /^\d+(\.\d{1,2})?$/,
            message: "请输入高度,最多保留两位小数",
            trigger: "blur"
          }
        ],
        xaxis: [
          { required: true, message: "请输入", trigger: "blur" },
          { pattern: /^\d+(\.\d{1,2})?$/, message: "请输入", trigger: "blur" }
        ],
        yaxis: [
          { required: true, message: "请输入", trigger: "blur" },
          { pattern: /^\d+(\.\d{1,2})?$/, message: "请输入", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入6位数字", trigger: "blur" }
          // { pattern: /^\d+$/, message: "请输入6位数字", trigger: "blur" }
        ],
        stationId: [{ required: true, message: "请输入", trigger: "change" }]
      },
      title: "新增蓝牙信标",

      defprops: {
        expandTrigger: "hover",
        label: "name",
        value: "id",
        checkStrictly: true
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      optionsPlan: [],
      plan: {},
      taggd:null,
      imgurl:require('@imgs/map.jpg')
    };
  },
  computed: {},
  created() {
    if (this.mode == "edit") {
      this.title = "编辑蓝牙信标";
      // this.getInfo();
    } else {
      // this.getCode();
    }
  },
  mounted() {
    this.dialogVisible = true;
  },
  beforeDestroy() {
    this.taggd && this.taggd.destroy();
  },
  methods: {
    changPlan(val) {
      if (val) {
        this.plan = this.optionsPlan.find(el => el.id == val);
      } else {
        this.plan = {};
      }
    },

    initMap() {
      let image = document.getElementById("image");
      let options = {
        // 缩放比率
        zoomRatio: 0.1,
        // 最小缩放比例
        zoomRatioMin: 0.1,
        // 最大缩放比例
        zoomRatioMax: 4,
      };

      this.taggd && this.taggd.deleteTags();

      this.taggd = new Taggd(image, options, []).enableEditorMode();
      setTimeout(() => {
        let img = this.taggd.imageData;
        let p = { x: img.naturalWidth/2, y: img.naturalHeight/2 };
        if (this.mode == "edit") {
          let x = ((parseFloat(this.formData.xaxis) / this.plan.xaxisFactLength) * img.naturalWidth);
          let y = img.naturalHeight - ((parseFloat(this.formData.yaxis) / this.plan.yaxisFactLength) * img.naturalHeight);
          p = {x,y}
        } 
        
        let tag = new Taggd.Tag(p).enableEditorMode();
        this.tag = tag;
      this.taggd.addTag(tag);
      this.calcAxis(img,p)
      // console.log('this.taggd>>> ',this.taggd)
      }, 0);

      this.taggd.on("*", function(event) {
        // console.log(event);
      });
  

       this.taggd.on('taggd.tag.editor.moveup',  (taggd, tag)=> {
        let img =  taggd.imageData;
        let p = tag.position;
        this.calcAxis(img,p)
        
      });
      

   
    },
    updateX(val) {
      const result = /^\d+(\.\d{1,2})?$/.test(val);
      if(parseFloat(val) > this.plan.xaxisFactLength) {
        this.formData.xaxis = this.plan.xaxisFactLength;
      }
      if(result && this.tag) {
        let img = this.taggd.imageData;
        let x = ((parseFloat(this.formData.xaxis) / this.plan.xaxisFactLength) * img.naturalWidth);
        this.tag.position.x = x;
        this.taggd.setTags([this.tag])
      }
    },
    updateY(val) {
       const result = /^\d+(\.\d{1,2})?$/.test(val);
       if(parseFloat(val) > this.plan.yaxisFactLength) {
        this.formData.yaxis = this.plan.yaxisFactLength;
      }
      if(result && this.tag) {
        let img = this.taggd.imageData;
        let y = img.naturalHeight - ((parseFloat(this.formData.yaxis) / this.plan.yaxisFactLength) * img.naturalHeight);
        this.tag.position.y = y;
        this.taggd.setTags([this.tag])
      }

    },
    calcAxis(img,position) {
      
        this.formData.xaxis = (this.plan.xaxisFactLength * (position.x / img.naturalWidth)).toFixed(2);
        this.formData.yaxis = this.plan.yaxisFactLength - (this.plan.yaxisFactLength * (position.y / img.naturalHeight)).toFixed(2);
    },
    getInfo() {
      this.api
        .get("rtsoms/bluetoothBeacon/" + this.row.id)
        .then(res => {
          this.formData = res.data.data.result;
          this.getPlanList(this.formData.stationId);
        })
        .catch(e => {});
    },
    getCode() {
      this.api
        .get("rtsoms/bluetoothBeacon/code")
        .then(res => {
          this.formData.name = "SW01" + res.data.data.code;
        })
        .catch(e => {});
    },
    getPlanList(stationId) {
      if (!stationId) {
        this.optionsPlan = [];
        return;
      }
      let id = stationId;
      if (Array.isArray(stationId)) {
        id = stationId[stationId.length - 1];
      }

      this.api
        .get("rtsoms/bluetoothBeaconPlan/station/" + id)
        .then(res => {
          this.optionsPlan = res.data.data.result || [];
          this.changPlan(this.formData.bbpId)
        })
        .catch(e => {});
    },

    onClose() {
      this.$emit("close");
    },

    submitForm() {
      this.$refs.myForm.validate(valid => {
        if (valid) {
          this.doSubmit();
        } else {
          return false;
        }
      });
    },

    doSubmit() {
      this.disabledSumbit = true;
      let method = "post";
      let url = "/rtsoms/bluetoothBeacon";

      let params = {
        ...this.formData
      };

      if (this.mode == "edit") {
        method = "put";
        params.id = this.row.id;
      }

      this.api[method](url, params)
        .then(res => {
          this.disabledSumbit = false;
          if (res.data.meta.success) {
            this.$message.success(res.data.meta.msg);
            this.$emit("ok");
            this.dialogVisible = false;
          } else {
            this.$message.error(res.data.meta.msg);
          }
        })
        .catch(err => {
          this.disabledSumbit = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.right-view {
  position: absolute;
  right: 16px;
  top: 90px;
  width: 600px;
  height: 460px;
  padding: 8px;
  border: 1px solid gainsboro;
  .container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    ::v-deep .taggd {
      .taggd__button {
        display: block;
        width: 1rem;
        height: 1rem;
        margin-top: -0.5rem;
        margin-left: -0.5rem;
        background-color: rgba(43, 140, 237, 0.75);
        border-radius: 0.5rem;
      }

      .taggd__button:hover {
        z-index: 10;
        background-color: rgb(43, 140, 237);
      }

      .taggd__popup {
        position: absolute;
        top: 125%;
        left: 50%;
        display: block;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background-color: rgba(43, 140, 237, 0.75);
        transform: translateX(-50%);
      }
    }
  }
}
</style>
