import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import {} from 'jasmine';
import {} from 'mocha';
describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard]
        });
    });
    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
