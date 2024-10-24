import { StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm.js';


const defaultModule ={
  ModuleID: null, 
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel:null,
  ModuleLeaderID: null,
  ModuleLeaderName:  null,
  ModuleImage: null, 

};



 const ModuleAddScreen=({navigation,route} ) =>{
  //inisitilation----- 
  const {onAdd} = route.params;
  //State-----------------------
  //Handlers-----
  const handleCancel = navigation.goBack;
  //View---------
  return (
<Screen>
  <ModuleForm onSubmit={onAdd} onCancel={handleCancel}/>
  </Screen> 



  );
};
const styles = StyleSheet.create({}
);

export default ModuleAddScreen;
