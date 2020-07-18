void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}
int values[3] = {0, 0, 0};
void loop() {
  int count = 0;
  while (Serial.available() > 0) {
    int input = Serial.read() - '0';
    values[count] = input;
    count++;
  }
  count = 0;
  
  digitalWrite(2, values[0]); 
  digitalWrite(3, values[1]); 
  digitalWrite(4, values[2]); 

  delay(500);
}
