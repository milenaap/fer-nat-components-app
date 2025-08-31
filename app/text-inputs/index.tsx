import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const TextInputsScreen = () => {

  const isIOS = Platform.OS === 'ios'

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <ThemedView>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder="Correo electronico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard>

            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>

          </ThemedCard>

          <ThemedCard>

            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>

          </ThemedCard>

          <ThemedCard>

            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>

          </ThemedCard>

          <ThemedCard>

            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>

          </ThemedCard>

          <ThemedCard>

            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>

          </ThemedCard>

          <ThemedCard>
            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
      
        </ThemedView>
      </ScrollView>

    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
