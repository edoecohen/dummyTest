'use strict';

describe('PlayerFlow factory', function(){
    var PlayerFlow;
    var rootScope;
    
    beforeEach(angular.mock.module('app'));
  
    beforeEach(angular.mock.inject(function ($rootScope, _PlayerFlow_) {
      PlayerFlow = _PlayerFlow_;
      rootScope = $rootScope;
      spyOn(rootScope, '$broadcast');
    }));

    it('should be created successfully', function() {
        expect(PlayerFlow).toBeDefined();
    });
        
    it('should have "nowPlayingIndex" set to 0', function() {
      expect(PlayerFlow.nowPlayingIndex).toBe(0);
    });

    // LoadVideo function -- loads video info
    describe('LoadVideo function', function() {
      
      it('should be created successfully', function() {
        expect(PlayerFlow.loadVideo).not.toBeUndefined();
      });

      it('should load video info', function() {
        PlayerFlow.data = [{
          videoName:    'U2 - "Invisible" (RED) Edit Version',
          likes:        3
        }];
        PlayerFlow.loadVideo(PlayerFlow.nowPlayingIndex);
        expect(PlayerFlow.videoNowPlaying.videoName).toBe('U2 - "Invisible" (RED) Edit Version');
        expect(PlayerFlow.videoNowPlaying.likes).toBe(3);
      });
    });

    // ChangeVideo function -- changes video in the feed list
    describe('ChangeVideo function', function() {

      it('should be created successfully', function() {
        expect(PlayerFlow.changeVideo).not.toBe(null);
      });

      it('should change video', function() {
        PlayerFlow.changeVideo('next');
        expect(PlayerFlow.nowPlayingIndex).toBe(1);
        PlayerFlow.changeVideo('back');
        expect(PlayerFlow.nowPlayingIndex).toBe(0);
      })
    });

    // SendControlEvent function -- broadcasts YouTube player events
    describe('SendControlEvent function', function() {

      it('should be created successfully', function() {
        expect(PlayerFlow.sendControlEvent).not.toBe(null);
      });

      it('should broadcast PLAY & STOP', function() {
        PlayerFlow.sendControlEvent('PLAY');
        expect(rootScope.$broadcast).toHaveBeenCalledWith('PLAY');
        PlayerFlow.sendControlEvent('STOP');
        expect(rootScope.$broadcast).toHaveBeenCalledWith('STOP');
      });
    })

});
