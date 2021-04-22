import React, { useState } from "react";
import {Picker} from '@react-native-picker/picker';


function SignUp4(props) {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    return (
        <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        </Picker>
    );
}

export default SignUp4;