const input_str = "interview_attendance:P,interview_date:2019-04-15--to--2019-04-15,status:CAP";
const input_str1 = "location:mumbai|delhi|pune,list_type:S,min_education:1";


const parseStrToJson = (str) => {
  let data = [];
  const jsonElements = str.split(',');
  const key_values = jsonElements.map((ele) => {
    return ele.split(':')
  });
  
  let kv_maps = '';
  
  //Parse based on the format for key, values
  for(let i=0; i< key_values.length; i++) {
    let key = key_values[i][0];
    let value = key_values[i][1];
    
    if(key.indexOf('_') > 0 ) {
      key = key.split('_').join('.');
    }
  
    if(value.indexOf('--to--') > 0) {
      value = { between : value.split('--to--')}
    } else if(value.indexOf('|') > 0) {
      value = { between : value.split('|')}
    }
  
    data[key] = value;
  
    kv_maps =  data;
  }
  
  const result = {
    and :  kv_maps
  };
  
  return result;
};
console.log("Json string to Object >>", parseStrToJson(input_str));