#include <iostream>
 
using namespace std;

int nivel;
 
class no {
public:
  int value;
  no *left;
  bool leftExists;
  no *right;
  bool rightExists;
 
  no(int v) {
    value = v;
    leftExists = false;
    rightExists = false;
  }
 
  void addLeftChild(no *l) {
    leftExists = true;
    left = l;
  }
  void addRightChild(no *r) {
    rightExists = true;
    right = r;
  }
  
};
 
void insert(int e, no *currentNo) {
	nivel++;
	if (e <= currentNo->value) {
  	  if (currentNo->leftExists) {
        insert(e, currentNo->left);
    }
      else {
		no *left = new no(e);	
		currentNo->addLeftChild(left);
		cout << nivel << " ";
    } 
 }
	else{
  	  if (currentNo->rightExists) {
        insert(e, currentNo->right);
    }
      else {
		no *right = new no(e);	
		currentNo->addRightChild(right);
		cout << nivel << " ";
    } 
 }

}
 
void TreeBin(int input[], int N) {
  no *no0 = new no(input[0]);
  cout << 1 << " ";
 
  for (int i = 1; i < N; i++)
  {
	nivel = 1;
    insert(input[i], no0);
  }
}
 
int main() {
  int N;
  cin >> N;
 
  int input[N];
  int element;
 
  for (int i = 0; i < N; i++) {
    cin >> element;
    input[i] = element;
  }
 
  TreeBin(input, N);
 
  return 0;
}

