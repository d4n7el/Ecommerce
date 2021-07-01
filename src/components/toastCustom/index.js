import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-root-toast';

export default function ToastCustom({ response }) {
  const [message, setMessage] = useState(
    'Se presento un error al actualizar los datos'
  );

  useEffect(() => {
    validateError();
  }, [response]);
  console.log(345678);

  const validateError = () => {
    if (
      response &&
      response.data &&
      response.data.message &&
      response.data.message[0] &&
      response.data.message[0].messages[0].message
    ) {
      setMessage(response.data.message[0].messages[0].message);
    }
  };

  return Toast.show(message, {
    position: Toast.positions.CENTER,
  });
}
