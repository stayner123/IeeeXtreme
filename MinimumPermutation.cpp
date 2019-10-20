#include <iostream>
#include <vector>
#include <set> 
#include <iterator> 

using namespace std;

void minimum(int N, int M, vector<int> myVec, set<int>mySet) {
    for (auto it = mySet.begin(); it != mySet.end(); ++it) {
        for (auto itV = myVec.begin(); itV < myVec.end(); ++itV) {
            if (*itV > *it) {
                myVec.insert(itV, *it);
                break;
            }
            if (itV == myVec.end() - 1) {
                myVec.push_back(*it);
            }
        }
    }
    for (auto it = myVec.begin(); it < myVec.end(); it++) {
        cout << *it << " ";
    }
}

int main() {
    int N, M;
    cin >> N >> M;
    
    set<int> mySet;
    vector<int> myVec;

    int element;
    for(int i = 0; i < N; i++) {
        cin >> element;
        myVec.push_back(element);
    }
    
    for(int i = 0; i < M; i++) {
        cin >> element;
        mySet.insert(element);
    }
    
    minimum(N, M, myVec, mySet);
    
    return 0;
}
