#include <iostream>
#include <string>
using namespace std;
int x, y, score, hp;
const int width = 10, height = 10;
int obX, obY;
string dir("");
int frame = 0;
bool lose;
void setup() {
  system("clear");
  lose = false;
  score = 0;
  obX = 0;
  obY = 0;
  x = width / 2;
  y = height / 2;
}

string replay;
void lost(){
  lose = true;
  obX = 0;
  obY = 0;
  x = width / 2;
  y = height / 2;
  system("clear");
  cout << "OUCH HELP AN ENEMY!!!!!" << endl;
  cout << "It looks like you lost! Try again? Type \"y\" to respawn." << endl;
  cin >> replay;

  if(replay != "y"){
    lost();
    replay = "";
  } else {
    lose = false;
    system("clear");
  }
  
  
}

// draw
void draw() {
  system("clear");
  cout << "\n" << endl;
// Draw Map
  for (int i = 0; i < width + 2; i++) {
    cout << "-";
    system("clear");
  }

  cout << endl;

  for (int i = 0; i < height; i++) {
    for (int j = 0; j < width; j++) {
      if (j == 0)
            cout << "|";

      if (j == x && i == y)
            cout << "o";

      if (j == obX && i == obY)
            cout << ">";
      
      else 
        cout << " ";
      
      if (j == width - 1) 
          cout << "|";

      

        // Which direction you typed
  for(int i = 0; i < dir.length(); i++){
      if(dir[i] == *"a") 
            x--;
      
      if(dir[i] == *"d") 
            x++;
      
      if(dir[i] == *"w") 
            y--;
      
      if(dir[i] == *"s") 
            y++;
    }
      
      dir="";
    }

  // You can't go off the ladder
    if(x > width-1) x = width / 2;

    if(x < 1) x = width / 2;
    
    if(y > height-1) y = height / 2;

    if(y < 1) y = height / 2;
    
    cout << endl;
  for (int i = 0; i < width + 2; i++) {
    cout << "_";
  }

  cout << endl;
    
  }

  obY++;

      if (obY > height) {
        obY = 0;
        obX = rand() % width;
      }
  
  cout << endl;
  
}

// Predraw
void PreDraw() {
    frame++;
  if (frame > 10) {
    draw();
    frame = 0;
    cout << "Go (w, a, s, or d): ";
    cin >> dir;
    cout << endl;
    system("clear");
  }

  if(
    
    (obX == x - 1  | obX == x + 1) 
                  &&
    (obY == y - 1 | obY == y + 1)
    
    )
      lost();

}

int main() {
  // Clear Console
  system("clear");

  // Intro
  cout << "Welcome to Ladder Climb!" << endl;
  cout << "A game by Nicecat99!" << endl << endl;
  cout << "    How to play:     " << endl;
  cout << "Type w, a, s, or d to move." << endl << " You can't go off the ladder." << endl << "The letter \"o\" is you (player) and \">\" is the enemy so be careful if you seem him." << endl << endl;
  cout << "Loading..." << endl;
  string blank;
  cout << "Enter Username: ";
  cin >> blank;
  setup();
  // While loop: loop function until you lose
  while (!lose) {
    PreDraw();
  }

  
}

